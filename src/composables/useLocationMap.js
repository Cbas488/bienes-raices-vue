import { ref } from 'vue'

export default function useLocationMap() {
    const zoom = ref(15)
    const center = ref([20.5283879,-100.8591856])

    const pin = (event) => {
        const marker = event.target.getLatLng()
        center.value = [marker.lat, marker.lng]
    }

    return {
        zoom,
        center,
        pin
    }
}