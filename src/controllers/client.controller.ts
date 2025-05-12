import { RequestHandler } from 'express';
import * as clientService from '../services/client.service';

export const createClient: RequestHandler = async (req, res, next) => {
  try {
    const client = await clientService.createClient(req.body);
    res.status(201).json(client);
  } catch (error) {
    next(error);
  }
};

export const getClients: RequestHandler = async (_req, res, next) => {
  try {
    const clients = await clientService.getClients();
    res.json(clients);
  } catch (error) {
    next(error);
  }
};

export const getClientById: RequestHandler = async (req, res, next) => {
  try {
    const client = await clientService.getClientById(Number(req.params.id));
    if (!client) {
      res.status(404).json({ message: 'Client not found' });
      return;
    }
    res.json(client);
  } catch (error) {
    next(error);
  }
};

export const updateClient: RequestHandler = async (req, res, next) => {
  try {
    const client = await clientService.updateClient(Number(req.params.id), req.body);
    res.json(client);
  } catch (error) {
    next(error);
  }
};

export const deleteClient: RequestHandler = async (req, res, next) => {
  try {
    await clientService.deleteClient(Number(req.params.id));
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};
