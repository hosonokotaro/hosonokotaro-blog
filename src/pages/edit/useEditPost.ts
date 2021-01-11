import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import {
  CollectionPost,
  collectionPosts,
  publicImages,
  Timestamp,
  TypeTimestamp,
} from '../../adapter';

const useEditPost = (): {
  id: string;
  title: string | null;
  content: string | null;
  release: boolean;
  createDate: TypeTimestamp;
  onTitleChanged: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onContentChanged: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onReleaseChanged: (e: React.ChangeEvent<HTMLInputElement>) => void;
  updatePost: (id: CollectionPost['id']) => void;
  deletePost: (id: CollectionPost['id']) => false | undefined;
  canSaveEditPost: boolean;
} => {
  const { id } = useParams<{ id: CollectionPost['id'] }>();
  const [title, setTitle] = useState<CollectionPost['title'] | null>(null);
  const [content, setContent] = useState<CollectionPost['content'] | null>(
    null
  );
  const [release, setRelease] = useState<CollectionPost['release']>(false);
  const [createDate, setCreateDate] = useState<CollectionPost['createDate']>(
    Timestamp.now()
  );

  useEffect(() => {
    const unsubscribe = collectionPosts
      .doc(id)
      .get()
      .then((doc) => {
        if (!doc.exists) {
          location.href = '/';
          return false;
        }

        const data = doc.data();

        setTitle(data?.title ? data.title : null);
        setContent(data?.content ? data.content : null);
        setRelease(data?.release ? data.release : false);
        setCreateDate(data?.createDate ? data.createDate : Timestamp.now());
      });

    return () => {
      unsubscribe;
    };
  }, [id]);

  const onTitleChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const onContentChanged = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const onReleaseChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRelease(e.target.checked);
  };

  const updatePost = (id: CollectionPost['id']) => {
    collectionPosts
      .doc(id)
      .update({
        title,
        content,
        release,
      })
      .then(() => {
        alert(`${id}を更新しました`);
      });
  };

  const deletePost = (id: CollectionPost['id']) => {
    const deleteConfirm = confirm('削除します');

    if (!deleteConfirm) {
      return false;
    }

    publicImages
      .child(id)
      .listAll()
      .then((list) => {
        list.items.map((item) => {
          item.delete();
        });
      });

    collectionPosts
      .doc(id)
      .delete()
      .then(() => {
        setTitle(null);
        setContent(null);
        setRelease(false);

        location.href = '/edit';
      });
  };

  const canSaveEditPost = Boolean(title) && Boolean(content);

  return {
    id,
    title,
    content,
    release,
    createDate,
    onTitleChanged,
    onContentChanged,
    onReleaseChanged,
    updatePost,
    deletePost,
    canSaveEditPost,
  };
};

export default useEditPost;
