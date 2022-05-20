
import CypressPageObject from '../helpers/cypressPageObject';

export class Home extends CypressPageObject {


    menuValidation(menu) {
        let expectedMenuLinks = Object.values(menu.menulinks);
        cy.get('[role="tab"]').each(($li, index, $list) => {
            cy.wrap($li).invoke('attr', "href").then((href) => {
                expect(href).to.be.equal(expectedMenuLinks[index]);
                expect($list.length).to.be.equal(expectedMenuLinks.length);
            })
        })
    }
     
    katanaMainTitleValidation(){
        this.button("button");
        this.getbyText("Welcome to Katana!").should("be.visible");
    }

}

export const homePage = new Home(); 