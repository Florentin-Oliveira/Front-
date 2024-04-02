export interface IOrdemServico{
    id:string,
    Nome: string,
    Numero: number, 
    Email:string,
    TipoServico:string,
    TipoHardware:string,
    DataSolicitacao:Date,
    DataSaida: Date | null ,
    Status:string,
    
}