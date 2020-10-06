/// <reference types="cypress" />

describe('ページを確認する', () => {
  it('header のリンクをクリックし、ルートに戻ることを確認する', () => {
    cy.visit('/');
    cy.get('header a').click();
    cy.url().should('include', '/');
  });

  it('記事一覧に特定の記事が存在し、リンク先への遷移を確認する', () => {
    const url = '/YrtBam2iH0XUNB4ucQVU';

    cy.visit('/');
    cy.get(`a[href="${url}"]`).click();
    cy.url().should('include', url);
  });
});
