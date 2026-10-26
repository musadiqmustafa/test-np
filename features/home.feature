Feature: Home page

  Scenario: Home page loads with products
    Given I am on the home page
    Then the page title should contain "ShopLite"
    And I should see the "Products" heading
