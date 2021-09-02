function fazerCadastro(nome, sobrenome, idade){
    return {
        nome,
        sobrenome,
        idade,
        get nomeCompleto(){ return this.nome + ' ' + this.sobrenome}
    }
}

