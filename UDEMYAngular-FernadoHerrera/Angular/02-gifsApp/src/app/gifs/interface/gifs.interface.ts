//[INFO] Lo que hace esta interface generada                                    (1) Con la estructura de los datos que nos da nuestro buscador por consola toda las arrays que nos devuelve copiamos la estructura.                             (2) Vamos a https://quicktype.io colocamos toda la estructura la nombramos y establecemos el lenguaje en nuestro caso Typescript y Marcando la silla de Solo interfaces, lo copiamos.                                                                       (3) Con este codigo creamos una carpeta de interfaces y generamos un archivo.ts en el cual lo pegamos.                                                          (4) Renombramos el campo data.                                                  Con esto conseguimos hacer eficiente el tratado de datos y poder manejarlos desde dentro de una forma mas facil, pudiendo llamarlos de una forma sencilla y dinamica por ejemplo: data.images.fixedheight accedereriamos sin probelma con el esqueleto montado en nuestra interface.
export interface SearchGifsResponse {
    data:       Gif[];
    pagination: Pagination;
    meta:       Meta;
}

export interface Gif {
    type:                       Type;
    id:                         string;
    url:                        string;
    slug:                       string;
    bitly_gif_url:              string;
    bitly_url:                  string;
    embed_url:                  string;
    username:                   string;
    source:                     string;
    title:                      string;
    rating:                     Rating;
    content_url:                string;
    source_tld:                 string;
    source_post_url:            string;
    is_sticker:                 number;
    import_datetime:            Date;
    trending_datetime:          string;
    images:                     Images;
    user?:                      User;
    analytics_response_payload: string;
    analytics:                  Analytics;
}

export interface Analytics {
    onload:  Onclick;
    onclick: Onclick;
    onsent:  Onclick;
}

export interface Onclick {
    url: string;
}

export interface Images {
    original:                 FixedHeight;
    downsized:                The480_WStill;
    downsized_large:          The480_WStill;
    downsized_medium:         The480_WStill;
    downsized_small:          DownsizedSmall;
    downsized_still:          The480_WStill;
    fixed_height:             FixedHeight;
    fixed_height_downsampled: FixedHeight;
    fixed_height_small:       FixedHeight;
    fixed_height_small_still: The480_WStill;
    fixed_height_still:       The480_WStill;
    fixed_width:              FixedHeight;
    fixed_width_downsampled:  FixedHeight;
    fixed_width_small:        FixedHeight;
    fixed_width_small_still:  The480_WStill;
    fixed_width_still:        The480_WStill;
    looping:                  Looping;
    original_still:           The480_WStill;
    original_mp4:             DownsizedSmall;
    preview:                  DownsizedSmall;
    preview_gif:              The480_WStill;
    preview_webp:             The480_WStill;
    hd?:                      DownsizedSmall;
    "480w_still":             The480_WStill;
}

export interface The480_WStill {
    height: string;
    width:  string;
    size:   string;
    url:    string;
}

export interface DownsizedSmall {
    height:   string;
    width:    string;
    mp4_size: string;
    mp4:      string;
}

export interface FixedHeight {
    height:    string;
    width:     string;
    size:      string;
    url:       string;
    mp4_size?: string;
    mp4?:      string;
    webp_size: string;
    webp:      string;
    frames?:   string;
    hash?:     string;
}

export interface Looping {
    mp4_size: string;
    mp4:      string;
}

export enum Rating {
    G = "g",
    PG = "pg",
    PG13 = "pg-13",
}

export enum Type {
    GIF = "gif",
}

export interface User {
    avatar_url:    string;
    banner_image:  string;
    banner_url:    string;
    profile_url:   string;
    username:      string;
    display_name:  string;
    description:   string;
    instagram_url: string;
    website_url:   string;
    is_verified:   boolean;
}

export interface Meta {
    status:      number;
    msg:         string;
    response_id: string;
}

export interface Pagination {
    total_count: number;
    count:       number;
    offset:      number;
}
