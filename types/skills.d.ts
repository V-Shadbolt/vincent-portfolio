export interface Skills {
    id:         number;
    attributes: {
        title:       string;
        progress:    number;
        createdAt:   Date;
        updatedAt:   Date;
        publishedAt: Date;
        image:       Image;
    }
}

export interface Image {
    data: {
        id:         number;
        attributes: {
            name:              string;
            alternativeText:   null;
            caption:           null;
            width:             number;
            height:            number;
            formats:           Formats;
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
        }
    }
    
}

export interface Formats {
    thumbnail: Medium;
    small?:    Medium;
    medium?:   Medium;
}

export interface Medium {
    ext:    string;
    url:    string;
    hash:   string;
    mime:   string;
    name:   string;
    path:   null;
    size:   number;
    width:  number;
    height: number;
}
