Feature: Testanto API do Star Wars

Background: Executa antes de cada teste
    * def url_base = 'https://pokeapi.co/api/v2/'

Scenario: Testando retorno .
    Given url 'https://pokeapi.co/api/v2/pokemon/ditto'
    When method get
    Then status 200

Scenario: Testando retorno people /1/ com informacoes invalidas
    Given url 'https://pokeapi.co/api/v2/pokemon/chocolate'
    When method get
    Then status 404

Scenario: Testando retorno pikachu e verificando o JSON
    Given url url_base
    And path '/pokemon/pikachu'
    When method get
    Then status 200
    And match response.name == 'pikachu'
    And match response.id == 25
