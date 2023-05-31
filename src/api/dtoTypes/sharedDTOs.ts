type Pagination = {
    currentPage: number;
    itemsPerPage: number;
    totalItems: number;
}

export interface ErrorDTO {
    code: number;
    message: string;
}

export interface PaginationResponseDTO<Model> {
    meta: Pagination;
    data: Model[];
}

export interface PaginationRequestDTO {
    currentPage: number;
}

export type FormatedResponse<Model> = [
    Model | null,
    null | ErrorDTO
]

export interface MessageDTO {
    message: string
}
