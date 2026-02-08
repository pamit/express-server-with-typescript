import { Request, Response } from 'express';
import { items } from '../../src/models/item';
import { createItem, getItems, getItemById, updateItem } from '../../src/controllers/itemController';

describe('Item Controller', () => {
  beforeEach(() => {
    items.length = 0; // Clear the items array before each test
  });

  describe('getItems', () => {
    it('should return an empty array when there are no items', () => {
      const req = {} as Request;
      const res = {
        json: jest.fn(),
      } as unknown as Response;

      getItems(req, res, jest.fn());

      expect(res.json).toHaveBeenCalledWith([]);
    });
  });

  describe('createItem', () => {
    it('should create a new item and return it', () => {
      const req = {
        body: { name: 'Test Item' },
      } as Request;

      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      } as unknown as Response;

      createItem(req, res, jest.fn());

      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalledWith(expect.objectContaining({ name: 'Test Item' }));
    });
  });
});
