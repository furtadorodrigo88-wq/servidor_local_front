import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";

interface PrestacaoServicoDBType {
    id: string;
    preco_hora: number;
    disign: string;
}

export const GET_ALL_PRESTACOES_SERVICOS = gql`
    query GetAllServiceProv {
        getAllServiceProv {
            id
            preco_hora
            disign
        }
    }
`

interface GetAllPrestacoesServicosResponse {
    getAllServiceProv: PrestacaoServicoDBType[];
}

export function useAllPrestacoesServicos() {
    const { loading, error, data } = useQuery<GetAllPrestacoesServicosResponse>(GET_ALL_PRESTACOES_SERVICOS);
    return { loading, error, data };
}
