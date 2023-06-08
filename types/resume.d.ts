export interface ResumeDoc {
    id:         number,
    attributes: {
        createdAt:   Date;
        updatedAt:   Date;
        publishedAt: Date;
        resume:      Resume;
    },
}
export interface Resume {
    data: {
        id:         number,
        attributes: {
            name:              string;
            alternativeText:   null;
            caption:           null;
            width:             null;
            height:            null;
            formats:           null;
            hash:              string;
            ext:               string;
            mime:              string;
            size:              number;
            url:               string;
            previewUrl:        null;
            provider:          string;
            provider_metadata: null;
            createdAt:         Date;
            updatedAt:         Date;
        },
    }
}
