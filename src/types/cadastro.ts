export interface Cadastro {
    idPerfil: number;           // ID_PERFIL
    nomeCompleto: string;       // NOME_COMPLETO
    idade?: number;             // IDADE (opcional)
    formacao?: string;          // FORMACAO
    profissao?: string;         // PROFISSAO
    areasInteresse?: string;    // AREAS_INTERESSE
    cep?: string;               // CEP
    email?: string;             // EMAIL
    telefone?: string;          // TELEFONE
    expectativaHub?: string;    // EXPECTATIVA_HUB
}
