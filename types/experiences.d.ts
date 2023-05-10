export interface Experiences {
    id:         number;
    attributes: {
        jobTitle:               string;
        company:                string;
        dateStarted:            string;
        dateEnded:              string;
        isCurrentlyWorkingHere: boolean;
        createdAt:              Date;
        updatedAt:              Date;
        publishedAt:            Date;
        companyImage:           CompanyImage;
        points:                 Points[];
        technologies:           Technologies;
    }
}

export interface CompanyImage {
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
    thumbnail: Thumbnail;
}

export interface Thumbnail {
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

export interface Points {
    id:          number;
    __component: string;
    point:       string;
}
