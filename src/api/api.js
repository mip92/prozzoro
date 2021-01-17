import axios from "axios";

const instance = axios.create({
    withCredentials: false,
    baseURL: "https://prozorro.mavinx.com/api/test",
});
export const authAPI = {
    regMe(name, surname, name_customer, email,
          phone, role, password, password_confirmation) {

        return instance.post(`/register`, {
            name, surname, name_customer, email,
            phone, role, password, password_confirmation
        })

    },
    login(email, password) {
        return instance.post(`/login`, {email, password}, {
            /*headers: {
                'Authorization': `Bearer ${token}`
            }*/
        })
    },
    logout(token) {
        debugger
        return instance.post(`logout`, {}, {
                headers: {
                    'Authorization': `${token}`
                }
            }
        )
    },
    edit(token, name, surname, name_customer, role) {
        debugger
        token='Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjNkMTBmMzNhZDAxYTU5NWZhZGE4MWYzNDgyN2YwNjYwZmI4YTkxODVmZjUzNTRkNTkxYTI4ODkyNDRkMGE0MTQ4NDc0MDZlMWI4YWFjZDQyIn0.eyJhdWQiOiIzIiwianRpIjoiM2QxMGYzM2FkMDFhNTk1ZmFkYTgxZjM0ODI3ZjA2NjBmYjhhOTE4NWZmNTM1NGQ1OTFhMjg4OTI0NGQwYTQxNDg0NzQwNmUxYjhhYWNkNDIiLCJpYXQiOjE2MTA4OTA5NTIsIm5iZiI6MTYxMDg5MDk1MiwiZXhwIjoxNjQyNDI2OTUyLCJzdWIiOiI5NCIsInNjb3BlcyI6W119.JI6ipnpcJbavVv_v9Lh_UMr82nBvJTMs_4EHXP7qTqI9VR8J3DesRodHIQQinNnzwq3n2XTXvLtFlBHEE1vRxH_r1oTWtCNhpLUakXgLSTztoa2KizSHmyaiUWCW_W2p9salaYP8KqZzKH2qFJ_IlRhiIr-VGCMR0tnqCRs9R2WlMtqttCG5GoY_fBX7UvgxUzz-bW-tbrdi8UFpUzxEcHFdXj7mQVYkwcuSjhLFmaYVqfy-QZqCjP4c0EQgzJW1vdIFSsg-ssOINHeNLe3TeBTkzPLP_KGoIpKSELGZTm5f_-cONXicyg2l_ru9Vvt8H7NKgo726Ra_m7PDZA0adXxjPvln1tZWdvixCxXLTPYXVu3OWUuFBtkFBu5ISdojZcXjHo_9AjVDNjXO1Z92pBT3cue2a-Oi4OMhosDG9SD_0O9sdiJv-Upj1CevKK6oe4WKwlEB2hsQWwQK3j0CT1D6Rt4PUTMKKMp8pPk9chIjqyJOLrj1YyBPUMayF04ev5KFJjUu5RrnoRTqowqcsdNXA5wv9EUiq7A_t0-r8b1KtuiHfUjQ0UBw_UW9bhFoyHGj6T3j-kkgcA8OiNI6pBxucxSSDWfJs5sDlpvktk9sfl2ECkamoAvoAQXmuz1yRTn7_A-i7Brukl1z6_YhJh5MV3r1kvMk5RGtWbh2kpY'
        return instance.post(`edit-user`, {name, surname, name_customer, role}, {
                headers: {
                    'Authorization': `${token}`
                }
            }
        )
    }
}
