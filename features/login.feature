Feature: Login no MyDemoApp

  Scenario: Usuário realiza login e logout com sucesso
    Given o app está aberto
    When eu abro o menu lateral
    And eu navego até a tela de login
    And eu informo as credenciais válidas
    Then devo ver o botão de logout disponível
    And eu realizo o logout
