import { useState, useEffect } from "react";
import axios from 'axios';
import '../css/clients.css';

export const Client = () => {
    const [client, setClient] = useState([]);

    const PAGE_ACCESS_TOKEN = "EAAMpQtLc4VABALE9xU0CDmsZCZCrZCzGJD1nZA4IHZALzTt17zm0fgSreGgYuLq9EYisEwTxElASgVoDaZCjT8zZCt2C4N5p565mi0AmpVjda9yMacObbjwZBr2EuPL122JFSrEmuQkovWES0eZCnaCQl0xvCT2LOzwMFZB84J0L3STvZC1HFeA8MkKsevMX4oZBzSqWMgm6wV98k5bfM3CErEoA"

    useEffect(() => {
        const getClient = async () => {
            const endpoint = "https://graph.facebook.com/v15.0/110176438593626/conversations?platform=MESSENGER&access_token=EAAMpQtLc4VABALE9xU0CDmsZCZCrZCzGJD1nZA4IHZALzTt17zm0fgSreGgYuLq9EYisEwTxElASgVoDaZCjT8zZCt2C4N5p565mi0AmpVjda9yMacObbjwZBr2EuPL122JFSrEmuQkovWES0eZCnaCQl0xvCT2LOzwMFZB84J0L3STvZC1HFeA8MkKsevMX4oZBzSqWMgm6wV98k5bfM3CErEoA"
            try {
                const clients = await axios.get(endpoint);
                setClient(clients.data.data);
                // console.log(clients.data.data);
            } catch (error) {
                console.log(error);
            }
        }
        getClient();
    }, []);

    // const getMessage = async (id) => {
    //     const message = await axios.get(`https://graph.facebook.com/v15.0/${id}?fields=messages&access_token=${PAGE_ACCESS_TOKEN}`)
    //     console.log(message);
    // } 


    return (
        <div className="clients">
            <h1>Facebook</h1>
            <div className="clients__card">
                {client.length === 0 && <p >Cargando...</p>}
                {
                    client.map((user, i) => {
                        return (
                            <div key={i} className="clients_id">
                                <img src="https://cdn-icons-png.flaticon.com/512/16/16363.png" alt="user" width={75} />
                                <h3>{user.id}</h3>
                                
                            </div>
                        )
                    })
                }
                
            </div>
        </div>
    )
}


// {
//     "data": [
//       {
//         "id": "t_1771559129761016",
//         "link": "/647252752102308/inbox/850230778471170/",
//         "updated_time": "2016-11-20T18:08:31+0000"
//       }
//     ],
//     "paging": {
//       "cursors": {
//         "before": "QVFIUkxFTFN6QTlwd2c5MUk5SzV6Vk82d2tGa2gyQzhMYUxGX05yZAGhlWXpEYUdTVFAyY2JKU1RRd0ZAwazhGNl9BSHM1c2dSTTdsRmhnb0F5dTFxUEdYLW92VEdlSEpkakk1ZADVsOWFmblo4SndaM0hHRUZAHMXRPOENVd21keHZABNV9o",
//         "after": "QVFIUkxFTFN6QTlwd2c5MUk5SzV6Vk82d2tGa2gyQzhMYUxGX05yZAGhlWXpEYUdTVFAyY2JKU1RRd0ZAwazhGNl9BSHM1c2dSTTdsRmhnb0F5dTFxUEdYLW92VEdlSEpkakk1ZADVsOWFmblo4SndaM0hHRUZAHMXRPOENVd21keHZABNV9o"
//       }
//     }
//   }

//   {
//     "messages": {
//       "data": [
//         {
//           "id": "m_adPay7pYyMLgpsYVcT7vbV9TJurbKC0jFtk6UhLNvGqY9Ck3J_BHN6dd10owrBum",
//           "created_time": "2016-11-20T18:08:31+0000"
//         },
//         {
//           "id": "m_IwTcAn5BvVqsV60Sg55uMx8B-xlwRxnegLxIN-cpsJvCztjq2TLwcMZPkuHS9pYB",
//           "created_time": "2016-11-07T01:41:13+0000"
//         },
//         {
//           "id": "m_O-1-RauYWISm4DjLrNkH-yh_y9FEmRMiweUzLU9L7VnAdUtcTALqoGayULTFnJeX",
//           "created_time": "2016-11-07T01:40:52+0000"
//         },
//         {
//           "id": "m_j_qsZxLdAQYPUDtwaTgMWfa7BawBB2PDXLQCdMYfbHinRko7zHYXYx2Bpa4PAQyg",
//           "created_time": "2016-11-07T01:40:52+0000"
//         },
//         {
//           "id": "m_4m5mO6Tz2pqVMFgJxv70M7qYQ3Ggfq4msITJPslNzG02hzP2I-yo6qtE2NHWEyug",
//           "created_time": "2016-10-25T19:38:08+0000"
//         },
//         {
//           "id": "m_Ddrrp1XdBiChq5-uQfZenvTU3uh5ujdZHeTQ9ggGubjhs6BWbadOZbfTh2oE_y7w",
//           "created_time": "2016-10-25T19:38:08+0000"
//         }
//       ],
//       "paging": {
//         "cursors": {
//           "before": "QVFIUmRSMDUxNGtXNFFDZAE1sRGN5S2t1YkFmbUkzaVFNeXlLYmN3THdfSWVQaFJlUHV3ZAzlZAbmVRc1psajFLeGRCekJ1bU9XSlpqU0tDc01EbEQ5Mmw2UEVkOWtPMDRRbkZAqV1AwQXhobG1FMVJj",
//           "after": "QVFIUlZAzTjRlVVd4T1BDdkVkNEE3RnVMNWJzX1RHbEZATcmRLbEUyVTlJWF9TZAWNnVDBnTnRHVms5YXlMX1M5SS1xa3J2YU1tRkNXbWVwTTZAMem1OTmtfVTYwcldDdUQ4UTBGclc1MGhOWkVvdXBJ"
//         }
//       }
//     },
//     "id": "t_1771559129761016"

//     647252752102308

// me?fields=id,name
