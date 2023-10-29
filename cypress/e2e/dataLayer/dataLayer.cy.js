/// <reference types="cypress" />

describe('dataLayer testing', () => {
  beforeEach(() => {

    cy.visit('https://commitquality.com/practice-mock-data-layer')

  })

  it('displays data layer', () => {

    const headerText = 'In the script tag in dev tools you can inspect the mocked data layer'

    cy.get('p').should('be.visible').should('include.text', headerText);

    cy.window().then(function (win) {

      //Creating constants:
      const dataLayer = win.dataLayer;
      const favouriteYoutubeChannel = dataLayer.favouriteYoutubeChannel;
      const pageName = dataLayer.pageName;
      const subscribedToCommitQuality = dataLayer.subscribedToCommitQuality;

      //Logging results:
      cy.log(dataLayer)

      //Assertions:
      expect(favouriteYoutubeChannel).to.contain('CommitQuality')
      expect(pageName).to.contain('MockDataLayer')
      expect(subscribedToCommitQuality).to.be.true;

    })

  })

})
