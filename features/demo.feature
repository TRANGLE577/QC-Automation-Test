Feature: Sign in, buy goods and contact in My Store Page
  In order to achieve my goals
  I want to Sign in 
    Scenario: Verify Sign in, order and contact successfully 
      Given I login into My Store Page successfully
      When I click button Sign in 
      Then I see "Create an account"
      When I enter email address in fields 
      When I enter all required information in all fields
      Then Confirm Login successfully with new account

      When I enter an invalid keyword in the search bar
      Then I see "No results were found"
      When I enter "maxi" in the search bar
      When I see search results shown
      And I select color "yellow"
      Then Confirm I add product to cart successfully

      When I choose an item in "Women"
      When I change the quantity to -3, size "L" and color "orange"
      Then Confirm I add product to cart successfully

      When I enter "Dresses" in the search bar
      When I select a product in the search results
      Then Confirm I add product to cart successfully

      When I choose an item in "Tshirts"
      When I select color "blue" 
      Then Confirm I add product to cart successfully

      When I go to the shopping cart 
      And I see "Your shopping cart"
      When I remove the first added item
      Then The item has been removed from the cart
      When I proceed to check out items
      Then I see "Your order on My Store is complete"

      When I click button Contact us
      Then I see "CUSTOMER SERVICE"
      When I fill all fields in contact
      And I click button Send
      Then I see "Your message has been successfully sent to our team"
      When I click button Sign out
      Then Verify I logged out 

    