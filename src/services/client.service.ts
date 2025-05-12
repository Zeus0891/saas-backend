import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createClient = async (data: {
  fullName: string;
  companyName?: string;
  phone: string;
  email?: string;
  address?: string;
  notes?: string;
}) => {
  return await prisma.client.create({
    data,
  });
};

export const getClients = async () => {
  return await prisma.client.findMany({
    orderBy: { createdAt: 'desc' },
  });
};

export const getClientById = async (id: number) => {
  return await prisma.client.findUnique({
    where: { id },
  });
};

export const updateClient = async (id: number, data: {
  fullName?: string;
  companyName?: string;
  phone?: string;
  email?: string;
  address?: string;
  notes?: string;
}) => {
  return await prisma.client.update({
    where: { id },
    data,
  });
};

export const deleteClient = async (id: number) => {
  return await prisma.client.delete({
    where: { id },
  });
};
