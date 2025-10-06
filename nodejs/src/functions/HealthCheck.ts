import { app, HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";

export async function HealthCheck(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
    const successMessage = `🟢 200: Function App is Healthy!`;

    context.log(successMessage);

    return {
        body: successMessage
    };
};

app.http('HealthCheck', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: HealthCheck,
    route: 'health'
});
