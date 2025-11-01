export interface ApiResponse {
    success: boolean;
    data?: any;
    message: string;
    errors: string[];
    statusCode: number;
}
