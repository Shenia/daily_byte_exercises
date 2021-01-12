//2021-01-10
#include <iostream>

using namespace std;

class Node {
    public:
        int data;
        Node * next;
    
    Node (int data, Node* next) {
        this->data = data;
        this->next = next;
    }
};

ostream& operator<<(ostream &strm, const Node *node) {
    if (node == nullptr) {
        return strm << "NULL";
    }
    return strm << node->data << "->" << node->next;
}

Node* sumLinkedList(Node* a, Node* b) {
    //copy
    if (!a && !b) {
        return NULL;
    }
    Node* aRunner = a;
    Node* bRunner = b;
    Node* retNode = new Node(0, NULL);
    Node* retNodeRunner = retNode;
    Node* pastNode = retNode;
    while(aRunner && bRunner) {
        retNodeRunner->data = aRunner->data + bRunner->data;
        retNodeRunner->next = new Node(0, NULL);
        aRunner = aRunner->next;
        bRunner = bRunner->next;
        pastNode = retNodeRunner;
        retNodeRunner = retNodeRunner->next;
    }
    delete retNodeRunner;
    retNodeRunner = pastNode;
    retNodeRunner->next = NULL;
    while (aRunner || bRunner) {
        retNodeRunner->next = new Node(0, NULL);
        retNodeRunner = retNodeRunner->next;
        retNodeRunner->data = 0;
        retNodeRunner->next = NULL;
        if (aRunner) {
            aRunner = aRunner -> next;
        } else {
            bRunner = bRunner -> next;
        }
    }
    return retNode;
}

int main()
{
    Node* a = new Node(9, new Node(9, new Node(9, new Node(9, NULL))));
    Node* b = new Node(1, NULL);
    Node * retNode = sumLinkedList(a, b);
    cout << retNode;
    return 0;
}

// runtime: O(max(size of a, size of b))
// space: O(max(size of a, size of b))