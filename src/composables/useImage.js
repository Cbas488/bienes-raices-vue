import { ref as storageRef } from 'firebase/storage'
import { useFirebaseStorage, useStorageFile } from 'vuefire'
import { uid } from 'uid'
import { computed } from 'vue'


export default function useImage() {
    const storage = useFirebaseStorage()
    const storageRefPath = storageRef(storage, `/propiedades/${uid()}.jpg`)
    const { url, upload } = useStorageFile(storageRefPath)

    const uploadImage = (event) => {
        const data = event.target.files[0]

        if(data) {
            upload(data)
        }
    }

    const image = computed(() => {
        return url.value ? url.value : null
    })

    return {
        url,
        uploadImage,
        image
    }
}