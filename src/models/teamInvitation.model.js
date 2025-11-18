import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';
import Team from './team.model.js';

const TeamInvitation = sequelize.define('TeamInvitation', {
  id: { type: DataTypes.UUID, primaryKey: true },
  teamId: { type: DataTypes.UUID, references: { model: Team, key: 'id' } },
  email: { type: DataTypes.STRING, allowNull: false },
  token: { type: DataTypes.STRING, allowNull: false },
  status: { type: DataTypes.ENUM('PENDING', 'ACCEPTED', 'DECLINED'), defaultValue: 'PENDING' },
});

export default TeamInvitation;
