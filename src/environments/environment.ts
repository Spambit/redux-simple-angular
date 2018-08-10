// Create your own oauth2 credentials to use this program.
import { YoutubeCredentials } from "~/environments/youtube_credentials";
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  youtube_client_id : YoutubeCredentials.client_id,
  youtube_api_key: YoutubeCredentials.api_key
};
