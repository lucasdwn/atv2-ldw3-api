import { IPersonalizacao } from '../interfaces/IPersonalizacao';
import dateService from './dateService';

const icones = ['📃', '📝', '📦', '🛒', '🎉', '📖', '🗒️', '💡', '📝'];
const cores = ['#B0BEC5', '#FF4081', '#4CAF50', '#FF9800', '#2196F3', '#9C27B0', '#FFEB3B', '#FF5722'];

export function getPersonalizacaoAleatoria(): IPersonalizacao {
    const iconeAleatorio = icones[Math.floor(Math.random() * icones.length)];
    const corAleatoria = cores[Math.floor(Math.random() * cores.length)];

    return {
        icone: iconeAleatorio,
        cor: corAleatoria,
        criadoEm: dateService.getServiceDate(),
    };
}