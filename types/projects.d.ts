export interface Projects {
    id:         number;
    attributes: {
        title:        string;
        summary:      string;
        linkToBuild:  string;
        date:         string;
        createdAt:    Date;
        updatedAt:    Date;
        publishedAt:  Date;
        image:        Image;
        technologies: Technologies;
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
    small:     Small;
    thumbnail: Small;
}

export interface Small {
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

export interface Technologies {
    data: TechnologiesDatum[];
}

export interface TechnologiesDatum {
    id:         number;
    attributes: {
        title:       string;
        progress:    number;
        image:       Image;
        createdAt:   Date;
        updatedAt:   Date;
        publishedAt: Date;
    }
}
