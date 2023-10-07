import admin from "firebase-admin";

import serviceAccount from "./serviceAccountKey.json" assert { type: "json" };

let private_key = process.env.private_key.replace(/\\n/gm, "\n");
const firebase_params = {
  type: serviceAccount.type,
  projectId: serviceAccount.project_id,
  privateKeyId: process.env.private_key_id,
  privateKey: private_key,
  clientEmail: serviceAccount.client_email,
  clientId: serviceAccount.client_id,
  authUri: serviceAccount.auth_uri,
  tokenUri: serviceAccount.token_uri,
  authProviderX509CertUrl: serviceAccount.auth_provider_x509_cert_url,
  clientC509CertUrl: serviceAccount.client_x509_cert_url,
};

admin.initializeApp({
  credential: admin.credential.cert(firebase_params),
});

export default admin;
