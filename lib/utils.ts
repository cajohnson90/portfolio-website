export const validateString = (value: unknown, maxLength: number) => {
    return (value || typeof value == "string" || maxLength > (value as string).length) 
}

export const getErrorMessage = (error:unknown) => {
    let message: string;
    if (error instanceof Error) {
        message = error.message;
    } else if (error && typeof error === 'object' && 'message' in error) {
        message = String(error.message)
    } else if (typeof error === "string") {
        message = error;
    } else {
        message = "Unknown error"
    }
    return message;
}
