Feature: Login

  Scenario: Login page opens from the home page
    Given I am on the home page
    When I open the login page
    Then I should see the "Log in" heading

  Scenario: Registered user can log in
    Given I am on the home page
    When I open the login page
    And I log in with valid credentials
    Then I should be logged in
