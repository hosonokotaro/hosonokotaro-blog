import React from 'react';
import { Helmet } from 'react-helmet';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import styled from 'styled-components';

import ContentBox from '@/atoms/ContentBox';
import ErrorMessage from '@/atoms/ErrorMessage';
import Footer from '@/atoms/Footer';
import Layout from '@/atoms/Layout';
import Spinner from '@/atoms/Spinner';
import Title from '@/atoms/Title';
import Header from '@/organisms/Header';
import useTop from '~/customHooks/useTop';
import getDate from '~/utility/getDate';

import SinglePost from './SinglePost';

const App: React.FC = () => {
  const {
    topResponse,
    isLoading: isTopLoading,
    isError: isTopError,
  } = useTop({
    target: 'default',
  });

  const titleDateList = topResponse?.titleDateList;

  return (
    <>
      {/* NOTE: 動的に更新される Helmet は、指定しないと何も変わらないため、初期値を入れます。 */}
      <Helmet>
        <title>Tech Blog | WEB DEVELOPER HOSONO KOTARO</title>
      </Helmet>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Layout tagName="article">
              <Title text="記事一覧" />
              {titleDateList &&
                titleDateList.map(({ id, title, createDate }) => (
                  <ContentBox key={id} marginTopSize="40px">
                    <Link to={id}>
                      <Title rank="span" text={title} />
                    </Link>
                    <Date>{createDate}</Date>
                  </ContentBox>
                ))}
              {isTopLoading && <Spinner />}
              {isTopError && (
                <ContentBox marginTopSize="40px" textAlign="center">
                  <ErrorMessage />
                </ContentBox>
              )}
            </Layout>
          </Route>
          <Route exact path="/:id">
            <SinglePost />
          </Route>
        </Switch>
        <Footer year={getDate('year')} />
      </Router>
    </>
  );
};

export default App;

const Date = styled.div`
  margin-top: 12px;
  font-size: 1rem;
`;
