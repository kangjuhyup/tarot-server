interface PapagoHeader {
    "X-NCP_APIGW-API-KEY-ID" : string;
    "X-NCP-APIGW-API-KEY" : string;
    "Content-Type" : string;
}

export interface PapagoHeaderData {
    client_id : string;
    api_key : string;
}

export interface TranslateDto {
    'source' : string;
    'target' : string;
    'text' : string;
}

export class PapagoClient {
    url = 'https://naveropenapi.apigw.ntruss.com/nmt/v1/translation';
    header:PapagoHeader;

    constructor(
        headerData : PapagoHeaderData
    ) {
        this.header = {
            'X-NCP_APIGW-API-KEY-ID': `${headerData.client_id}`,
            'X-NCP-APIGW-API-KEY' : `${headerData.api_key}`,
            'Content-Type' : 'application/json'
        }
    }

    async translateText(dto:TranslateDto) {
        const response = await fetch(this.url, {
            method : 'POST',
            headers : this.header as unknown as HeadersInit,
            body : JSON.stringify(dto)
        })
        if(response.status === 200) return response.json();
    }
    
}