interface SuccessResponse {
    status: "created" | "updated" | "deleted"
}

interface ErrorResponse {
    errors: Record<string, string>
}

export type ApiResponse = SuccessResponse | ErrorResponse;