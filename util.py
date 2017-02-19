import os

scriptdir = os.path.dirname(os.path.abspath(__file__))


def f(fname):
    """

    :param fname: Name of the file relative to project directory
    :return: Absolute path of fname inside of the project directory
    """
    return os.path.join(scriptdir, fname)
