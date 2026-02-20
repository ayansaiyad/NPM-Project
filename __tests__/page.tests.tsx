  import { render, screen, fireEvent } from '@testing-library/react';
  import Home from '@/app/page';

  describe('Todo App', () => {
    it('renders the app title', () => {
      render(<Home />);
      expect(screen.getByText(/DevOps Todo App/i)).toBeInTheDocument();
    });

    it('adds a new todo', () => {
      render(<Home />);
      const input = screen.getByTestId('todo-input');
      const addButton = screen.getByTestId('add-button');

      fireEvent.change(input, { target: { value: 'Test Todo' } });
      fireEvent.click(addButton);

      expect(screen.getByText('Test Todo')).toBeInTheDocument();
    });

    it('toggles todo completion', () => {
      render(<Home />);
      const input = screen.getByTestId('todo-input');
      const addButton = screen.getByTestId('add-button');

      fireEvent.change(input, { target: { value: 'Test Todo' } });
      fireEvent.click(addButton);

      const checkbox = screen.getByTestId('todo-checkbox');
      fireEvent.click(checkbox);

      expect(checkbox).toBeChecked();
    });

    it('deletes a todo', () => {
      render(<Home />);
      const input = screen.getByTestId('todo-input');
      const addButton = screen.getByTestId('add-button');

      fireEvent.change(input, { target: { value: 'Test Todo' } });
      fireEvent.click(addButton);

      const deleteButton = screen.getByTestId('delete-button');
      fireEvent.click(deleteButton);

      expect(screen.queryByText('Test Todo')).not.toBeInTheDocument();
    });
  });