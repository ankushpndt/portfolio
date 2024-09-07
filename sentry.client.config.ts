import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://426d99c950568f7c1c7f8a8f11940284@o4507911653949440.ingest.de.sentry.io/4507911655850064",
  integrations: [
    Sentry.feedbackIntegration({
      // Additional SDK configuration goes in here, for example:
      colorScheme: "system",
    }),
  ],
});
