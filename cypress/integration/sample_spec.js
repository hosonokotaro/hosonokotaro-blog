// / <reference types="cypress" />

describe('My First Test', () => {
  it('ページを確認する', () => {
    cy.visit('https://example.cypress.io/');

    // 要素を検索する
    // cy.contains('within');

    // 要素をクリックする
    cy.contains('type').click();

    // URLを確認する（部分一致）
    cy.url().should('include', '/commands/actions');

    // formへ入力し、その内容を確認する
    cy.get('.action-email')
      .type('fake@email.com')
      .should('have.value', 'fake@email.com');
  });
});
