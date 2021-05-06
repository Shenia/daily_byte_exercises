def coloring(graph):
    vertices = []
    if len(graph) == 0:
        return true
    group_1_taken = False
    group_2_taken = False
    group_1 = []
    group_2 = []
    for i in range(0, len(graph)):
        vertices.append(i)

    for i, neighbors_i in enumerate(graph):
        # neighbors with itself
        if i in neighbors_i:
            return False
        # invalid vertice
        for neighbor in neighbors_i:
            if neighbor not in vertices:
                return False
        # set groups
        if not group_1_taken:
            group_1.extend(neighbors_i)
            group_1_taken = True
        elif equal_set(group_1, neighbors_i):
            continue
        elif not group_2_taken:
            group_2.extend(neighbors_i)
            group_2_taken = True
        elif not equal_set(group_2, neighbors_i):
            return False
    group_1.extend(group_2)
    if not equal_set(group_1, vertices):
        return False
    return True
    
def equal_set(list_1, list_2):
    for item in list_1:
        if not item in list_2:
            return False
    for item in list_2:
        if not item in list_1:
            return False
    return True

def check_output(test_function, input_val, expected):
  print("input:", input_val, "expected:", expected, "got:", test_function(input_val))
  return

# assuming each list i inside the example list corresponds to the neighbors of vertice i
example_1 = [[1, 3], [0, 2], [1, 3], [0, 2]]
example_2 = [[1, 3], [0, 3, 2], [1, 3], [0, 1, 2]]
example_3 = [[], []]
check_output(coloring, example_1, True)
check_output(coloring, example_2, False)
check_output(coloring, example_3, False)

# @ravenCondol's solution
# def isBipartite(graph):
#     if len(graph) == 0:
#         return True
#     node__set_num_map = {}
#     points_to_look_at_queue = [0]
#     while len(points_to_look_at_queue) != 0:
#         cur_node = points_to_look_at_queue.pop(0)
#         if node__set_num_map.get(cur_node, None) is None:
#             node__set_num_map[cur_node] = 0
#         cur_set_num = node__set_num_map[cur_node]
#         adj_vertices = graph[cur_node]
#         for adj_vertice in adj_vertices:
#             if node__set_num_map.get(adj_vertice, None) is not None:
#                 if node__set_num_map[adj_vertice] == cur_set_num:
#                     return False
#                 continue
#             else:
#                 node__set_num_map[adj_vertice] = (node__set_num_map[cur_node] + 1) % 2
#             points_to_look_at_queue.append(adj_vertice)
#     return True