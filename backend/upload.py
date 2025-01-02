from pymongo import MongoClient

CONNECTION_STRING= 'mongodb+srv://rishimurumkar:Opal3727!@cluster0.qjupq.mongodb.net/'


if __name__ == '__main__':
    client = MongoClient(CONNECTION_STRING)

    # Access the database
    db = client["portfolio"] 

    # Access the collection
    collection = db["portfolio_projects"]  

    chess = {
        "_id": "chess",
        "scope": "Development of a fully functional chess game with graphical UI, piece movements, and game logic implemented in Python.",
        "project_description": "This project involves the end-to-end creation of a chess game that adheres to standard chess rules and mechanics. The game features an intuitive graphical user interface built with Pygame, supporting interactive gameplay for two players. Core functionalities include the enforcement of chess rules such as piece-specific movements, castling, en passant, and pawn promotion. The game also incorporates robust logic for detecting check, checkmate, and stalemate scenarios. Optimized algorithms are used to validate moves and ensure seamless performance, while the visual representation enhances user experience with features like highlighted moves and real-time updates.",
        "outcome": "The project successfully delivered a highly interactive and visually appealing chess game. Users can engage in a complete chess-playing experience, from initial setup to complex mechanics such as special moves and endgame conditions. The application showcases modular, reusable code design, making it scalable for future enhancements such as AI-based opponents or online multiplayer modes. This project stands as a testament to advanced programming skills, logical implementation of game mechanics, and the ability to deliver a user-centric application.",
        "problem_solved_for_client": None
    }

    research_paper = {
        "_id": "3d_lidar_adverse_weather",
        "scope": "Research on improving 3D lidar-based object detection for autonomous vehicles in adverse weather conditions.",
        "project_description": "This research explores the challenges of 3D lidar-based object detection in adverse weather conditions, a critical aspect of ensuring passenger safety in autonomous vehicles. The study evaluates the performance of two state-of-the-art convolutional neural network (CNN) models, PointPillar and SECOND, trained on the KITTI dataset in clear weather. These models are tested on the Canadian Adverse Driving Conditions (CADC) dataset to analyze their resilience under snowy conditions, revealing significant performance degradation. To address this, the models are retrained on CADC, demonstrating recovery in adverse conditions but a corresponding loss in clear-weather accuracy. The research highlights the inherent trade-offs in neural network generalization and provides a pathway to developing more robust object detection systems through iterative retraining and dataset augmentation.",
        "outcome": "The study successfully highlights the limitations of current 3D object detection models in handling environmental variability, particularly in adverse weather conditions. The retrained models exhibited substantial improvement in detecting pedestrians in snowy environments, achieving average precision scores close to those in clear weather. However, the inability to generalize across both scenarios underscores the need for hybrid training methodologies. This research offers a foundational framework for enhancing the robustness of autonomous vehicle perception systems, paving the way for safer and more reliable deployment in diverse operational contexts.",
        "problem_solved_for_client": None
    }

    # result = collection.insert_one(chess)
    # result = collection.insert_one(research_paper)
    # print("Document inserted with ID:", result.inserted_id)


    filter = {"_id": "3d_lidar_adverse_weather"}
    

    for doc in collection.find():
        print(doc)
