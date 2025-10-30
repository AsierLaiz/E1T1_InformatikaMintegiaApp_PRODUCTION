const API_URL = '../../src/controllers/InbentarioController.php';

const inbentarioaService = {
    // Erregistro guztiak lortu
    async getAll() {
        try {
            const response = await fetch(API_URL, { method: 'GET' });
            if (!response.ok) throw new Error('Inbentarioa: Errorea datuak lortzean.');
            return await response.json();
        } catch (error) {
            console.error('Errorea inbentarioa lortzean:', error);
            return [];
        }
    },

    // Erregistro berria sortu
    async create(etiketa, idEkipamendu, erosketaData) {
        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ etiketa, idEkipamendu, erosketaData })
            });
            const data = await response.json();
            if (!response.ok) throw new Error(data.error || 'Inbentarioa: Errorea erregistroa sortzean.');
            return data;
        } catch (error) {
            console.error('Errorea inbentarioa sortzean:', error);
            throw error;
        }
    },

    // Erregistroa ezabatu
    async delete(etiketa) {
        try {
            const response = await fetch(API_URL, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ etiketa })
            });
            const data = await response.json();
            if (!response.ok) throw new Error(data.error || 'Inbentarioa: Errorea erregistroa ezabatzean.');
            return data;
        } catch (error) {
            console.error('Errorea inbentarioa ezabatzean:', error);
            throw error;
        }
    }
};

export default inbentarioaService;