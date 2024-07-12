export interface Legislacion {
    eidlegislacion: number,
    ctitulo: string,
    fecha_ing: string,
    carchivo: string,
    cnom_archivo: string,
    eidtema: number,
    eidsubtema: number,
    pares: string,
}

export interface FormattedLeg {
    name: string,
    type: string,
    date: string,
    publication: string,
    id: number,
}