export interface PageInfo {
    id:         number,
    attributes: {
        name:                  string;
        role:                  string;
        backgroundInformation: string;
        phoneNumber:           string;
        email:                 string;
        address:               string;
        createdAt:             Date;
        updatedAt:             Date;
        publishedAt:           Date;
        heroImage:             HeroImage;
        profilePic:            HeroImage;
        socials:               Socials[];
        rotatingTexts:          RotatingTexts[];
    },
}

export interface HeroImage {
    data: {
        id:         number,
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
        },
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

export interface Socials {
    data: [
        id:         number,
        attributes: {
            title:       string;
            url:         string;
            createdAt:   Date;
            updatedAt:   Date;
            publishedAt: Date;
        },
    ]
}

export interface RotatingTexts {
    id:          number;
    __component: string;
    rotatingText:       string;
}
