# Versionamento de Código com Git e GitHub

## 1. O que é versionamento de código?

O versionamento de código é o controle sistemático das alterações feitas no código-fonte de um projeto ao longo do tempo. Ele permite rastrear quem fez as alterações, quando foram feitas e por quê. Isso é essencial para colaboração em equipe, controle de bugs e desenvolvimento de software de forma geral.

## 2. O que é Git?

Git é um sistema de controle de versão distribuído amplamente utilizado. Ele permite que você acompanhe as alterações no código-fonte de um projeto e colabore com outros desenvolvedores de forma eficiente. Git é conhecido por sua velocidade e flexibilidade.

## 3. O que é GitHub?

GitHub é uma plataforma de hospedagem de código-fonte baseada na web que utiliza o Git para controle de versão. Ela oferece recursos adicionais, como gerenciamento de problemas, colaboração em equipe e integração contínua. É um local comum para desenvolvedores compartilharem e colaborarem em projetos de código aberto e privados.

## 4. Como configurar e autenticar via Token?

### Para configurar e autenticar via Token no GitHub, siga os passos a seguir:

#### Crie um token de acesso pessoal no GitHub em "Settings" -> "Developer settings" -> "Personal access tokens".

Copie o token gerado.

#### Configure o Git para usar o token como credencial:
//COMANDOS PARA EXECUTAR NO TERMINAL
##### git config --global credential.helper store
##### git credential approve

## 5. Como configurar e autenticar via SSH?

### Para configurar e autenticar via SSH:
#### Gere um par de chaves SSH no seu computador:
//COMANDOS PARA EXECUTAR NO TERMINAL
##### ssh-keygen -t rsa -b 4096 -C "seu-email@example.com"

### Adicione a chave SSH gerada ao agente SSH:
##### ssh-add ~/.ssh/id_rsa

### Adicione a chave pública (id_rsa.pub) ao seu perfil no GitHub.

## 6. Como criar e clonar repositórios?

### Para criar um novo repositório no GitHub:
Faça login no GitHub.
Clique no sinal de '+' no canto superior direito e escolha "New repository".
Siga as instruções para criar o repositório.

### Para clonar um repositório existente:
//COMANDOS PARA EXECUTAR NO TERMINAL
##### git clone <URL_do_repositório>

## 7. Como salvar alterações no repositório local?

### Para salvar alterações no repositório local:
#### Adicione as alterações aos "staged" (preparadas):
//COMANDOS PARA EXECUTAR NO TERMINAL
##### git add <arquivos>

### Faça um commit das alterações:
//COMANDOS PARA EXECUTAR NO TERMINAL
##### git commit -m "Mensagem do commit"

## 8. Como desfazer alterações no repositório local?

### Para desfazer as alterações locais e restaurar o estado anterior:
#### Descarte as alterações não cometidas:
//COMANDOS PARA EXECUTAR NO TERMINAL
##### git reset --hard HEAD

#### Para descartar um commit específico:
//COMANDOS PARA EXECUTAR NO TERMINAL
##### git reset --hard <ID_do_commit>

## 9. Como enviar via REMOTE e trabalhar com branches?

### Para enviar alterações para o repositório remoto:
//COMANDOS PARA EXECUTAR NO TERMINAL
##### git push origin <nome_da_branch>

#### Para trabalhar com branches:
#### Criar uma nova branch:
//COMANDOS PARA EXECUTAR NO TERMINAL
##### git checkout -b <nome_da_branch>

#### Mudar para uma branch existente:
//COMANDOS PARA EXECUTAR NO TERMINAL
##### git checkout <nome_da_branch>

## 10. Como criar, mesclar, deletar e tratar conflitos em branches?

### Criar uma nova branch:
//COMANDOS PARA EXECUTAR NO TERMINAL
##### git checkout -b <nome_da_branch>

### Mesclar uma branch em outra:
##### git checkout <branch_destino>
##### git merge <branch_fonte>

### Deletar uma branch local:
##### git branch -d <nome_da_branch>

### Resolver conflitos em um merge:
1. Abra os arquivos com conflitos e resolva-os manualmente.
2. Adicione as alterações aos "staged" (preparadas).
3. Faça um commit para concluir o merge.

## 11. Como trabalhar com branches usando comandos úteis no dia a dia?

### Listar branches:
//COMANDOS PARA EXECUTAR NO TERMINAL
##### git branch

### Renomear uma branch:
//COMANDOS PARA EXECUTAR NO TERMINAL
##### git branch -m <novo_nome>

### Ver informações sobre as branches remotas:
//COMANDOS PARA EXECUTAR NO TERMINAL
##### git remote show origin

### Atualizar a branch local com a versão remota:
//COMANDOS PARA EXECUTAR NO TERMINAL
##### git pull origin <nome_da_branch>
