import os

scriptdir = os.path.dirname(os.path.abspath(__file__))


def f(fname):
    """

    :param fname: Name of the file relative to project directory
    :return: Absolute path of fname inside of the project directory
    """
    return os.path.join(scriptdir, fname)


def f_serve(fname):
    """

    :param fname: Name of the file relative to directory serving static files
    :return: Absolute path of fname
    """
    return os.path.join(scriptdir, 'static', fname)
