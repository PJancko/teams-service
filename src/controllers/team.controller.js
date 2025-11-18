import Team from '../models/team.model.js';
import { v4 as uuidv4 } from 'uuid';

export const createTeam = async (req, res) => {
  try {
    const { name, captainId } = req.body;
    const team = await Team.create({ id: uuidv4(), name, captainId });
    res.status(201).json(team);
  } catch (error) {
    res.status(500).json({ message: 'Error creando equipo', error: error.message });
  }
};

export const getTeamById = async (req, res) => {
  try {
    const team = await Team.findByPk(req.params.id);
    if (!team) return res.status(404).json({ message: 'Equipo no encontrado' });
    res.json(team);
  } catch (error) {
    res.status(500).json({ message: 'Error obteniendo equipo', error: error.message });
  }
};
