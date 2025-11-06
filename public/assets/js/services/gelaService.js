const API_URL = '../../src/controllers/GelaController.php';

const gelaService = {
    // Erregistro guztiak lortu
    async getAll() {
        try {
            const response = await fetch(API_URL, { method: 'GET' });
            if (!response.ok) throw new Error('Gelak: Errorea datuak lortzean.');
            return await response.json();
        } catch (error) {
            console.error('Errorea gelak lortzean:', error);
            return [];
        }
    },

    async update(id, data) {
        const res = await fetch(`${API_URL}?id=${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
        if (!res.ok) throw new Error('Errorea gela eguneratzean');
        return await res.json();
    },

    // Erregistro berria sortu
    async create(izena, taldea) {
        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ izena, taldea })
            });
            const data = await response.json();
            if (!response.ok) throw new Error(data.error || 'Errorea gela sortzean.');
            return data;
        } catch (error) {
            console.error('Errorea gela sortzean:', error);
            throw error;
        }
    },

    // Erregistroa ezabatu
    async delete(id) {
        try {
            const response = await fetch(API_URL, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id })
            });
            const data = await response.json();
            if (!response.ok) throw new Error(data.error || 'Gela: Errorea erregistroa ezabatzean.');
            return data;
        } catch (error) {
            console.error('Errorea gela ezabatzean:', error);
            throw error;
        }
    }
};

export default gelaService;