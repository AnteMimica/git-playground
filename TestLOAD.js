// Creator: WebInspector 537.36

import { sleep } from 'k6'
import http from 'k6/http'

export const options = {}

export default function main() {
  let response

  response = http.post(
    'https://connectivity-platform-gateway-staging.ra-telemetry.com/graphql',
    '{"query":"query Vehicle($vehicleId: ID!) {\\r\\n  vehicle(id: $vehicleId) {\\r\\n    id\\r\\n    color\\r\\n    name\\r\\n    variant {\\r\\n      code\\r\\n      id\\r\\n      model {\\r\\n        updatedAt\\r\\n      }\\r\\n    }\\r\\n  }\\r\\n}","variables":{"vehicleId":"31797609-3879-4799-bd87-2574f60b30c8"},"operationName":"Vehicle"}',
    {
      headers: {
        accept: '*/*',
        /*safkakdfdsaokfsfskfdskfdssfsd*/
        /*safkakdfdsaokfsfskfdskfdssfsd*//*safkakdfdsaokfsfskfdskfdssfsd*//*safkakdfdsaokfsfskfdskfdssfsd*//*safkakdfdsaokfsfskfdskfdssfsd*//*safkakdfdsaokfsfskfdskfdssfsd*//*safkakdfdsaokfsfskfdskfdssfsd*//*safkakdfdsaokfsfskfdskfdssfsd*/
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'en-US,en;q=0.9',
        authorization:
          'Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICI2MXItMWpheFhpZnAyc29tNFJtOFdiMmF4ZmoxSVdYU2NEZXFmMEhfbk5rIn0.eyJleHAiOjE2NTIxNjQ1NzYsImlhdCI6MTY1MjE2Mjc3NiwianRpIjoiZGFhOWFmZDEtYmE5YS00NTg1LWFiN2UtNmNmZDRiZmRiZTc1IiwiaXNzIjoiaHR0cDovL2tleWNsb2FrLXN0YWdpbmcuaW50ZXJuYWwucmEtdGVsZW1ldHJ5LmNvbTo4MDgwL2F1dGgvcmVhbG1zL29lbSIsImF1ZCI6Imd0YSIsInN1YiI6IjY5ZWNlYjI1LTkxYjgtNDcxMS1iN2U5LTIzY2ZjZWFmZTY1NCIsInR5cCI6IkJlYXJlciIsImF6cCI6Imd0YSIsInNlc3Npb25fc3RhdGUiOiIwYTk3M2Y4Yi0yZjA3LTQ2MGQtYWY5Ny0xZjBlYzFlZWM2ZWMiLCJhY3IiOiIxIiwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIm9mZmxpbmVfYWNjZXNzIiwidW1hX2F1dGhvcml6YXRpb24iXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJhdXRob3JpemF0aW9uIjp7InBlcm1pc3Npb25zIjpbeyJzY29wZXMiOlsiZGVmYXVsdCJdLCJyc2lkIjoiMzg2ZjE1MjEtOWU4OC00NjA4LTlhYWQtZWFlZWY1N2Y0ZGQ0IiwicnNuYW1lIjoiY3ZtZHMtb3JjaGVzdHJhdG9yIn0seyJzY29wZXMiOlsiZGVmYXVsdCJdLCJyc2lkIjoiMWRlNDdiNDQtMmQ1YS00NTI2LTk4M2EtNGI2NDBiZTliNDU4IiwicnNuYW1lIjoidXNlci1tYW5hZ2VtZW50In1dfSwic2NvcGUiOiJvcGVuaWQgZW1haWwgcHJvZmlsZSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwibmFtZSI6IkFudGUgTWltaWNhIiwicHJlZmVycmVkX3VzZXJuYW1lIjoiYW50ZS5taW1pY2FAcmltYWMtdGVjaG5vbG9neS5jb20iLCJnaXZlbl9uYW1lIjoiQW50ZSIsImZhbWlseV9uYW1lIjoiTWltaWNhIiwiZW1haWwiOiJhbnRlLm1pbWljYUByaW1hYy10ZWNobm9sb2d5LmNvbSIsInVzZXJfZ3JvdXBzIjpbXX0.PeV7zEaTeKeqOGxWbm7QtL9sna4axpwKyzS6l0QWdoTstm4rgZRFVdwLb7EagjiGxHJ8aRt7hMNpfpi_YGU2gvCC6R3QDlvKSVD5pUeAxnAqAz0Tdba7-fIAa86Mz-ONJta62e-xUzq6BS69TFk4PcOI87U8J0s5ue7V6AAglh86-a4-vsqLUzdMlkAX7WZR2_eaJ6NEhcJnoqRT-O_EvddxCc1VOAAPqJJ3ZEK0B2J2g0_kQQKagQkBWBpvGNCCooxdcrsn6YxWLDLF1tWZ8bwrcT5rCDcTi1VXAtuTEPXcQqKT71pov_c_gLnuUMGtwPpEC4Mt6b2FFYx2by6F5A',
        'content-type': 'application/json',
        origin: 'https://studio.apollographql.com',
        referer:
          'https://studio.apollographql.com/graph/M2M-Federated-Microservice-Gateway/explorer?variant=staging-stitched',
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="101", "Google Chrome";v="101"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'cross-site',
        'user-agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.54 Safari/537.36',
      },
    }
  )

  /*ovo je testni dio za gitttttt*/
  /*ovo je testni dio za gitttttt*/
  /*ovo je testni dio za gitttttt*/
  /*ovo je testni dio za gitttttt*/
  /*ovo je testni dio za gitttttt*/


  response = http.post(
    'https://graphql.api.apollographql.com/api/graphql?operationName=TrackMutation',
    '{"operationName":"TrackMutation","variables":{"event":"RUN_EXPLORER_OPERATION","graphID":"M2M-Federated-Microservice-Gateway","graphVariant":"staging-stitched"},"extensions":{"persistedQuery":{"version":1,"sha256Hash":"984e87e0382e2c063386221c32c574cc2d746f1b1d75af04bd757360eae193e0"}}}',
    {
      headers: {
        accept: '*/*',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'en-US,en;q=0.9',
        'apollo-sudo': 'false',
        'apollographql-client-name': 'web-prod',
        'apollographql-client-version': '4d26a30f011c6ba386ce0cf6907611a0458b1e5a',
        'content-type': 'application/json',
        cookie:
          'authtoken=user%3Afp%2E21c6e444%2D0895%2D4e9d%2Da89a%2D683a674a1ef5%3AL5AB2A%5FIiR9Ltm0XkdAvUQ; ajs_anonymous_id=46fd0aea-02e0-479c-bc06-ca539e3a819c; ajs_user_id=fp.21c6e444-0895-4e9d-a89a-683a674a1ef5; ajs_group_id=rimac-automobili; OptanonAlertBoxClosed=2022-04-27T10:15:54.336Z; _mkto_trk=id:058-JFU-851&token:_mch-apollographql.com-1651063653884-39213; _gid=GA1.2.1034874501.1652098542; OptanonConsent=isGpcEnabled=0&datestamp=Tue+May+10+2022+08%3A12%3A06+GMT%2B0200+(Central+European+Summer+Time)&version=6.22.0&isIABGlobal=false&hosts=&landingPath=NotLandingPage&groups=C0001%3A1%2CC0002%3A1%2CC0003%3A1%2CC0004%3A1&geolocation=HR%3B21&AwaitingReconsent=false; utm_medium=organic; utm_source=google; _ga=GA1.1.198181603.1651054530; _ga_10TWJLWXPS=GS1.1.1652163126.1.0.1652163133.0; _ga_0BGG5V2W2K=GS1.1.1652162721.32.1.1652164099.0',
        origin: 'https://studio.apollographql.com',
        referer:
          'https://studio.apollographql.com/graph/M2M-Federated-Microservice-Gateway/explorer?variant=staging-stitched',
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="101", "Google Chrome";v="101"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-site',
        'user-agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.54 Safari/537.36',
        'x-instance-id': '8l9ydg',
      },
      /*ovo je testni dio za gitttttt*/
      /*ovo je testni dio za gitttttt*//*ovo je testni dio za gitttttt*//*ovo je testni dio za gitttttt*//*ovo je testni dio za gitttttt*/


    }
  )

  response = http.options(
    'https://connectivity-platform-gateway-staging.ra-telemetry.com/graphql',
    null,
    {
      headers: {
        accept: '*/*',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'en-US,en;q=0.9',
        'access-control-request-headers': 'authorization,content-type',
        'access-control-request-method': 'POST',
        origin: 'https://studio.apollographql.com',
        referer:
          'https://studio.apollographql.com/graph/M2M-Federated-Microservice-Gateway/explorer?variant=staging-stitched',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'cross-site',
        'user-agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.54 Safari/537.36',
      },
    }
  )

  response = http.options(
    'https://graphql.api.apollographql.com/api/graphql?operationName=TrackMutation',
    null,
    {
      headers: {
        accept: '*/*',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'en-US,en;q=0.9',
        'access-control-request-headers':
          'apollo-sudo,apollographql-client-name,apollographql-client-version,content-type,x-instance-id',
        'access-control-request-method': 'POST',
        origin: 'https://studio.apollographql.com',
        referer:
          'https://studio.apollographql.com/graph/M2M-Federated-Microservice-Gateway/explorer?variant=staging-stitched',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-site',
        'user-agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.54 Safari/537.36',
      },
    }
    /*ovo je testni dio za gitttttt*/
      /*ovo je testni dio za gitttttt*/
      /*ovo je testni dio za gitttttt*//*ovo je testni dio za gitttttt*//*ovo je testni dio za gitttttt*/
      

  )

  response = http.post(
    'https://www.google-analytics.com/g/collect?v=2&tid=G-0BGG5V2W2K&gtm=2oe540&_p=1433955567&_z=ccd.tbB&cid=198181603.1651054530&ul=en-us&sr=2048x1153&_s=63&uid=fp.21c6e444-0895-4e9d-a89a-683a674a1ef5&sid=1652162721&sct=32&seg=1&dl=https%3A%2F%2Fstudio.apollographql.com%2Fgraph%2FM2M-Federated-Microservice-Gateway%2Fexplorer%3Fvariant%3Dstaging-stitched&dt=Explorer%20%7C%20M2M%20Federated%20Microservice%20Gateway%40staging-stitched%20%7C%20Studio&en=user_action&_et=1984&ep.event_category=Ran%20a%20query&ep.event_label=User%20actions&ep.event_secondary_label=preflightScriptEnabled%3Afalse%2ChasPreflightScript%3Afalse&ep.orgId=rimac-automobili&ep.offline=false&ep.version=4d26a30f011c6ba386ce0cf6907611a0458b1e5a',
    null,
    {
      headers: {
        accept: '*/*',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'en-US,en;q=0.9',
        origin: 'https://studio.apollographql.com',





        referer:
          'https://studio.apollographql.com/graph/M2M-Federated-Microservice-Gateway/explorer?variant=staging-stitched',
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="101", "Google Chrome";v="101"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'no-cors',
        'sec-fetch-site': 'cross-site',
        'user-agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.54 Safari/537.36',
      },
    }
  )

  Ovo su najnovije promjene!!

  Ante Mimica komentar 123455555555555  Ante Mimica komentar 123455555555555

  Ante Mimica komentar 123455555555555  Ante Mimica komentar 123455555555555

  Ante Mimica komentar 123455555555555  Ante Mimica komentar 123455555555555

  Ante Mimica komentar 123455555555555  Ante Mimica komentar 123455555555555
  sleep(1)
}
