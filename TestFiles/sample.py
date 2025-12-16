
import os

def list_files(directory):
    """Lists all files in the given directory."""
    for filename in os.listdir(directory):
        print(f"Found file: {filename}")

if __name__ == "__main__":
    # This is a Python script previewed by CodeGlimpse
    current_dir = os.getcwd()
    print(f"Scanning: {current_dir}")
    list_files(current_dir)
