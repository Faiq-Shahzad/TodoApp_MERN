const axios = require("axios");

//------------------ TESTING POST FUNCTION -------------------------
describe("POST request", () => {
  test("should make a successful POST request", async () => {
    // Mocking the response
    const mockResponse = {
      status: 200,
      data: { message: "Success" },
    };
    axios.post = jest.fn().mockResolvedValue(mockResponse);

    // Make the POST request
    const response = await axios.post("/addtask", { task: "Wake Up" });

    // Assertions
    expect(response.status).toBe(200);
    expect(response.data.message).toBe("Success");
    expect(axios.post).toHaveBeenCalledTimes(1);
    expect(axios.post).toHaveBeenCalledWith("/addtask", { task: "Wake Up" });
  });

  test("should handle an error in the POST request", async () => {
    // Mocking the error response
    const errorMessage = "Request failed";
    const errorResponse = {
      response: {
        status: 500,
        data: { error: errorMessage },
      },
    };
    axios.post = jest.fn().mockRejectedValue(errorResponse);

    // Make the POST request
    try {
      await axios.post("/addtask", { task: "Wake Up" });
      // If the request doesn't throw an error, fail the test
      expect(true).toBe(false);
    } catch (error) {
      // Assertions
      expect(error.response.status).toBe(500);
      expect(error.response.data.error).toBe(errorMessage);
      expect(axios.post).toHaveBeenCalledTimes(1);
      expect(axios.post).toHaveBeenCalledWith("/addtask", { task: "Wake Up" });
    }
  });
});

//------------------ TESTING GET FUNCTION -------------------------
describe('GET request', () => {
  test('should make a successful GET request', async () => {
    // Mocking the response
    const mockResponse = {
      status: 200,
      data: { message: 'Success', data: { foo: 'bar' } },
    };
    axios.get = jest.fn().mockResolvedValue(mockResponse);

    // Make the GET request
    const response = await axios.get('/');

    // Assertions
    expect(response.status).toBe(200);
    expect(response.data.message).toBe('Success');
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith('/');
  });

  test('should handle an error in the GET request', async () => {
    // Mocking the error response
    const errorMessage = 'Request failed';
    const errorResponse = {
      response: {
        status: 500,
        data: { error: errorMessage },
      },
    };
    axios.get = jest.fn().mockRejectedValue(errorResponse);

    // Make the GET request
    try {
      await axios.get('/');
      // If the request doesn't throw an error, fail the test
      expect(true).toBe(false);
    } catch (error) {
      // Assertions
      expect(error.response.status).toBe(500);
      expect(error.response.data.error).toBe(errorMessage);
      expect(axios.get).toHaveBeenCalledTimes(1);
      expect(axios.get).toHaveBeenCalledWith('/');
    }
  });
});



//------------------ TESTING DELETE FUNCTION -------------------------
describe('DELETE request', () => {
  test('should make a successful DELETE request', async () => {
    // Mocking the response
    const mockResponse = {
      status: 200,
      data: { message: 'Success' },
    };
    axios.delete = jest.fn().mockResolvedValue(mockResponse);

    // Make the DELETE request
    const response = await axios.delete(`/task/6487034b5ae10bc9da870294`);

    // Assertions
    expect(response.status).toBe(200);
    expect(response.data.message).toBe('Success');
    expect(axios.delete).toHaveBeenCalledTimes(1);
    expect(axios.delete).toHaveBeenCalledWith(`/task/6487034b5ae10bc9da870294`);
  });

  test('should handle an error in the DELETE request', async () => {
    // Mocking the error response
    const errorMessage = 'Request failed';
    const errorResponse = {
      response: {
        status: 500,
        data: { error: errorMessage },
      },
    };
    axios.delete = jest.fn().mockRejectedValue(errorResponse);

    // Make the DELETE request
    try {
      await axios.delete(`/task/6487034b5ae10bc9da870294`);
      // If the request doesn't throw an error, fail the test
      expect(true).toBe(false);
    } catch (error) {
      // Assertions
      expect(error.response.status).toBe(500);
      expect(error.response.data.error).toBe(errorMessage);
      expect(axios.delete).toHaveBeenCalledTimes(1);
      expect(axios.delete).toHaveBeenCalledWith(`/task/6487034b5ae10bc9da870294`);
    }
  });
});



//------------------ TESTING UPDATE FUNCTION -------------------------

describe('Update request', () => {
  test('should make a successful update request', async () => {
    // Mocking the response
    const mockResponse = {
      status: 200,
      data: { message: 'Success' },
    };
    axios.put = jest.fn().mockResolvedValue(mockResponse);

    // Make the update request
    const response = await axios.put(`/task/6487034b5ae10bc9da870294`, { completed: true, completedTime: Date.now });

    // Assertions
    expect(response.status).toBe(200);
    expect(response.data.message).toBe('Success');
    expect(axios.put).toHaveBeenCalledTimes(1);
    expect(axios.put).toHaveBeenCalledWith(`/task/6487034b5ae10bc9da870294`, { completed: true, completedTime: Date.now });
  });

  test('should handle an error in the update request', async () => {
    // Mocking the error response
    const errorMessage = 'Request failed';
    const errorResponse = {
      response: {
        status: 500,
        data: { error: errorMessage },
      },
    };
    axios.put = jest.fn().mockRejectedValue(errorResponse);

    // Make the update request
    try {
      await axios.put(`/task/6487034b5ae10bc9da870294`, { completed: true, completedTime: Date.now });
      // If the request doesn't throw an error, fail the test
      expect(true).toBe(false);
    } catch (error) {
      // Assertions
      expect(error.response.status).toBe(500);
      expect(error.response.data.error).toBe(errorMessage);
      expect(axios.put).toHaveBeenCalledTimes(1);
      expect(axios.put).toHaveBeenCalledWith(`/task/6487034b5ae10bc9da870294`, { completed: true, completedTime: Date.now });
    }
  });
});


