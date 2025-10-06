import { app, HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";

export async function HelloDynatrace(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
    const successMessage = `🟢 200: Dynatrace Endpoint is running successfully`;

    context.log(successMessage);

    return {
        body: successMessage
    };
};

app.http('HelloDynatrace', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: HelloDynatrace,
    route: 'hellodynatrace'
});
