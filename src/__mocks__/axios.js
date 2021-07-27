import testResponse from "../config/testResponse"

export default {
  get: jest.fn().mockResolvedValue(testResponse),
}
